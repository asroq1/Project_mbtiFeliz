// app/api/deepseek/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_KEY,
})

export async function POST(request: NextRequest) {
    try {
        const { mbti, city, country } = await request.json()

        // 더 구체적이고 압축된 프롬프트로 최적화
        const prompt = `MBTI ${mbti} 유형을 위한 ${country}의 ${city} 여행 계획:
1. ${mbti} 성향에 맞게 2박 3일 일정 구성
2. 각 날짜별 핵심 관광지 2곳, 식사 장소 1곳만 추천
3. 각 장소별 1-2문장으로 핵심만 설명`

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        '당신은 간결하고 정확한 여행 정보를 제공하는 여행 큐레이터입니다. 불필요한 서론과 결론 없이 핵심 정보만 전달하세요.',
                },
                { role: 'user', content: prompt },
            ],
            model: 'deepseek-chat',
            temperature: 0.3, // 더 낮춰서 결정적인 응답 유도
            max_tokens: 450, // 토큰 수 제한
            top_p: 0.7, // 더 집중된 결과 유도
            frequency_penalty: 0, // 페널티 제거
            presence_penalty: -0.7, // 더 명확한 지시를 위해 낮춤
        })

        return NextResponse.json({
            result: completion.choices[0].message.content,
        })
    } catch (error: any) {
        console.error('DeepSeek API 에러:', error)
        return NextResponse.json(
            { error: '여행 일정을 생성하는 데 문제가 발생했습니다.' },
            { status: 500 },
        )
    }
}
