import { insertDiaryEntry } from '../../../database/diaries';
import { NextRequest, NextResponse } from 'next/server';
import { deleteDiaryAndSets } from '../../../database/diaries';

export async function POST(
  req: NextRequest,
): Promise<NextResponse<{ status: number; error?: string }>> {
  try {
    const {
      exerciseSelection,
      exerciseReps1,
      exerciseWeight1,
      exerciseReps2,
      exerciseWeight2,
      exerciseReps3,
      exerciseWeight3,
      userId,
    } = await req.json();

    console.log('userId', userId);

    // Call the insertDiaryEntry function with the extracted data
    await insertDiaryEntry({
      exerciseSelection,
      exerciseReps1,
      exerciseWeight1,
      exerciseReps2,
      exerciseWeight2,
      exerciseReps3,
      exerciseWeight3,
      userId,
    });

    // Send a response back to the client
    // res.status(200).json({ success: true });
    return NextResponse.json({
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      error: error.message,
    });
  }
}

export default async function handler(req: any, res: any) {
  if (req.method === 'DELETE') {
    const diaryId = req.body.diaryId;
    try {
      await deleteDiaryAndSets(diaryId);
      res.status(200).end();
    } catch (error) {
      console.error('Failed to delete diary entry:', error);
      res.status(500).json({ error: 'Failed to delete diary entry' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
