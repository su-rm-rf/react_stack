import { describe, it, test, expect, beforeAll, afterAll } from '@jest/globals'

import { multiply, fetchData } from './../src/utils/x'

beforeAll(() => {
  // console.log('start')
})

test('3*4=12', () => {
  expect(multiply(3, 4)).toBe(12)
})

test('相等', () => {
  const data = { a: 'xx' }
  data['b'] = 'yy'
  expect(data).toEqual({ a: 'xx', b: 'yy' })
})

// test('测试Promise', () => {
//   fetchData().then(res => {
//     expect(res.data.id).toBe(123)
//   })
// })

// test('测试', () => {

// })

afterAll(() => {
  // console.log('end')
})