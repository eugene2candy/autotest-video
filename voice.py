import azure.cognitiveservices.speech as speechsdk
import json

speech_config = speechsdk.SpeechConfig(
    subscription="c264e05cd9de48f1b75a3efa61a11d44",
    region="westus3",  # e.g. "eastus"
)

with open("public/ssml/manifest.json", encoding="utf-8") as f:
    manifest = json.load(f)

for segment in manifest["segments"]:
    ssml_path = f"public/ssml/{segment['file']}"
    output_path = f"public/audio/{segment['file'].replace('.xml', '.wav')}"

    audio_config = speechsdk.audio.AudioOutputConfig(filename=output_path)
    synthesizer = speechsdk.SpeechSynthesizer(
        speech_config=speech_config, audio_config=audio_config
    )

    with open(ssml_path, encoding="utf-8") as f:
        ssml = f.read()

    result = synthesizer.speak_ssml_async(ssml).get()
    if result.reason == speechsdk.ResultReason.SynthesizingAudioCompleted:
        print(f"OK: {segment['file']}")
    else:
        print(f"FAILED: {segment['file']} - {result.reason}")
