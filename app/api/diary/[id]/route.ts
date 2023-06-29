import { deleteDiary } from '../../../../database/diaries';
import { NextResponse } from 'next/server';

export async function DELETE(
  _request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
): Promise<NextResponse<{ status: number }>> {
  try {
    if (params.id) {
      await deleteDiary(Number(params.id));
      return NextResponse.json({
        status: 200,
      });
    }
    return NextResponse.json({
      status: 422,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
    });
  }
}
