from django.shortcuts import render, redirect
from .models import Task

# Create your views here.
def list(request):
    tasks= Task.objects.all()
    print(tasks)
    return render(request, 'lstTareas.html',{"tasks": tasks})

def create(request):
    task= Task(title=request.POST['title'], description=request.POST['description'])
    task.save()
    return redirect('/tasks/')

def delete(request, tareaId):
    task=Task.objects.get(id=tareaId)
    task.delete()
    return redirect('/tasks/')