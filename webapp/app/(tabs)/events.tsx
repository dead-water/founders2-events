import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import React, { useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import AudioStream from '@/components/AudioStream';
import VideoCall from '@/components/VideoCall';
import * as DocumentPicker from 'expo-document-picker';


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { IconSymbol } from '@/components/ui/IconSymbol';

function UploadSyllabus() {
    const [file, setFile] = useState<DocumentPicker.DocumentResult | null>(null);

    const handleUpload = async () => {
        const result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setFile(result);
            // Handle the uploaded file here
            console.log(result);
        }
    };

    return (
        <View>
            <Button title="Upload Syllabus" onPress={handleUpload} />
            {file && <Text>Uploaded File: {file.name}</Text>}
        </View>
    );
}

export default function PlanScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#5ebfa9', dark: '#5ebfa9' }}
            headerImage={
                <IconSymbol
                    size={310}
                    color="#808080"
                    name="chevron.left.forwardslash.chevron.right"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Build Lesson Plan</ThemedText>
            </ThemedView>
            <ThemedText>This app helps you build an effective lesson plan.</ThemedText>
            <Collapsible title="Syllabus Upload">
                <ThemedText>
                    Upload your syllabus to get started. The app will automatically generate a lesson plan based on your syllabus.
                </ThemedText>

                <UploadSyllabus />


                {/* <ThemedText>
                    This app has two screens:{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>
                    The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
                    sets up the tab navigator.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/router/introduction">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink> */}
            </Collapsible>
            <Collapsible title="Lesson Components">
                <ThemedText>
                    These are the lession components that will be covered.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Key Questions">
                <ThemedText>
                    These are the key questions that will be covered in the lesson plan and examinable criteria in the final examination.
                    Determine how many key questions: 2
                </ThemedText>
            </Collapsible>
            <Collapsible title="Practice Oral Examination">
                <ThemedText>
                    Begin a practice oral examination.
                </ThemedText>
            </Collapsible>

            {/* 
            <Collapsible title="Images">
                <ThemedText>
                    For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
                    different screen densities
                </ThemedText>
                <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
                <ExternalLink href="https://reactnative.dev/docs/images">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Custom fonts">
                <ThemedText>
                    Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
                    <ThemedText style={{ fontFamily: 'SpaceMono' }}>
                        custom fonts such as this one.
                    </ThemedText>
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Light and dark mode components">
                <ThemedText>
                    This template has light and dark mode support. The{' '}
                    <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                    what the user's current color scheme is, and so you can adjust UI colors accordingly.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Animations">
                <ThemedText>
                    This template includes an example of an animated component. The{' '}
                    <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
                    the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
                    library to create a waving hand animation.
                </ThemedText>
                {Platform.select({
                    ios: (
                        <ThemedText>
                            The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
                            component provides a parallax effect for the header image.
                        </ThemedText>
                    ),
                })}
            </Collapsible> */}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});
