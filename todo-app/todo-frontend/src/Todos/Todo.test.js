import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'
import Todo from './Todo'

const todos = [
  {
    _id: '63825071c5425c4d3df9252c',
    text: 'Write code',
    done: true,
  },
  {
    _id: '63825071c5425c4d3df9252d',
    text: 'Learn about containers',
    done: false,
  },
  {
    _id: '63825295c7dfab9c4851b3e0',
    text: 'pull mongo image from dockerhub',
    done: true,
    __v: 0,
  },
  {
    _id: '638261b68eabaaca36b469f2',
    text: 'Increase the number of tools in my toolbelt',
    done: true,
  },
]

const markTodoAsCompleted = jest.fn()
const deleteTodo = jest.fn()

describe('todo component tests', () => {
  beforeEach(() => {
    render(
      <Todo
        todo={todos[1]}
        onClickComplete={markTodoAsCompleted}
        onClickDelete={deleteTodo}
      />
    )
  })

  afterEach(() => {
    markTodoAsCompleted.mockClear()
    deleteTodo.mockClear()
  })

  it('changes todo status', () => {
    const button = screen.getByText('Set as done')
    fireEvent.click(button)
    expect(markTodoAsCompleted).toHaveBeenCalledTimes(1)
    expect(markTodoAsCompleted).toHaveBeenCalledWith(todos[1])
  })

  it('can delete a todo', () => {
    const button = screen.getByText('Delete')
    fireEvent.click(button)
    expect(deleteTodo).toHaveBeenCalledTimes(2)
    expect(deleteTodo).toHaveBeenCalledWith(todos[1])
  })
})
