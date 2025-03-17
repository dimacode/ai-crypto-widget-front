'use client'

import { useQuery } from '@tanstack/react-query'

async function fetchData() {
  const response = await fetch('https://api.github.com/repos/tannerlinsley/react-query')
  return response.json()
}

export default function About() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['github'],
    queryFn: fetchData,
  })

  if (isLoading) return <div className="flex min-h-screen items-center justify-center">Загрузка...</div>
  if (error) return <div className="flex min-h-screen items-center justify-center">Ошибка загрузки данных</div>

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">О нас</h1>
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">{data?.name}</h2>
        <p className="text-gray-600 mb-4">{data?.description}</p>
        <div className="flex gap-4">
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="font-semibold">Stars:</span> {data?.stargazers_count}
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded">
            <span className="font-semibold">Forks:</span> {data?.forks_count}
          </div>
        </div>
      </div>
    </main>
  )
} 