// app/api/deepseek/route.ts
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Changed to use OpenAI API key
})

export async function POST(request: NextRequest) {
    try {
        const { mbti, city, country } = await request.json()

        // 더 상세한 여행 정보를 요청하는 프롬프트로 수정
        const prompt = `${mbti} 성향의 여행자를 위한 ${country}의 ${city} 여행 가이드:

1. ${mbti} 성격 유형에 맞춘 ${city}여행지에 대해서 간략히 알려주세요.
2. 다음 정보를 포함해주세요:
   - 추천 관광지 2-3곳 (각 장소의 특징, ${mbti} 유형이 좋아할 만한 이유)
   - 숙소 주변 저녁 활동 추천
3. ${city}의 숨겨진 명소나 ${mbti} 유형이 특히 좋아할 만한 장소도 알려주세요.
4. 여행 시 ${mbti} 유형을 위한 팁이나 주의사항도 함께 제공해주세요.
5. 정보의 출처도 함께 기입해주세요.`

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content:
                        '당신은 MBTI 성향에 맞춘 맞춤형 여행 정보를 제공하는 전문 여행 큐레이터입니다. 각 MBTI 유형의 특성을 이해하고, 그에 맞는 여행지와 활동을 추천해주세요. 정확하고 유용한 정보를 제공하되, 너무 길지 않게 핵심만 전달하세요.',
                },
                { role: 'user', content: prompt },
            ],
            model: 'gpt-4o-mini', // Changed to OpenAI model
            temperature: 0.7, // 약간 높여서 더 창의적인 응답 유도
            max_tokens: 700, // 더 자세한 정보를 위해 토큰 수 증가
            top_p: 0.9,
            frequency_penalty: 0.2,
            presence_penalty: 0,
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
