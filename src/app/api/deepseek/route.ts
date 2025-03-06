// app/api/deepseek/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Changed to use OpenAI API key
})

export async function POST(request: NextRequest) {
    try {
        const { mbti, city, country } = await request.json()

        // 더 구체적이고 압축된 프롬프트로 최적화
        const prompt = `MBTI ${mbti} 유형을 위한 ${country}의 ${city} 여행 계획:
1. ${mbti} 성향에 맞게 2박 3일 일정 구성
2. 각 날짜별 핵심 관광지 2곳, 식사 장소 1곳만 추천
3. 각 장소별 1-2문장으로 핵심만 설명
4. 정보의 출처도 함께 기입해.
`
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        '당신은 간결하고 정확한 여행 정보를 제공하는 여행 큐레이터입니다. 불필요한 서론과 결론 없이 핵심 정보만 전달하세요.',
                },
                { role: 'user', content: prompt },
            ],
            model: 'gpt-4o-mini', // Changed to OpenAI model
            temperature: 0.1,
            max_tokens: 300,
            top_p: 0.5,
            frequency_penalty: 0,
            presence_penalty: -0.5,
        })

        return NextResponse.json({
            result: completion.choices[0].message.content,
        })
    } catch (error: any) {
        console.error('OpenAI API 에러:', error) // Updated error message
        return NextResponse.json(
            { error: '여행 일정을 생성하는 데 문제가 발생했습니다.' },
            { status: 500 },
        )
    }
}
