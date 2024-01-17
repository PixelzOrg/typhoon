import * as kinesis from 'aws-cdk-lib/aws-kinesis'
import { Construct } from 'constructs'

export class FileProcessingStages extends Construct {
  public readonly WhisperStage: kinesis.Stream
  public readonly VisionStage: kinesis.Stream
  public readonly ChatGPTSummaryStage: kinesis.Stream

  constructor(scope: Construct, id: string) {
    super(scope, id)

    // Transcription Stage Stream
    this.WhisperStage = new kinesis.Stream(this, 'transcriptionStream', {
      shardCount: 1,
      streamName: 'transcription-stream',
    })

    // Video Context Analysis Stage
    this.VisionStage = new kinesis.Stream(this, 'visionStream', {
      shardCount: 1,
      streamName: 'vision-stream',
    })

    // Summary Stage
    this.ChatGPTSummaryStage = new kinesis.Stream(this, 'summaryStream', {
      shardCount: 1,
      streamName: 'summary-stream',
    })
  }
}
