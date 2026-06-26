import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle,useSharedValue,withSpring } from 'react-native-reanimated';
import { ImageSourcePropType } from 'react-native';

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleImage = useSharedValue(imageSize);
    const transLateX = useSharedValue(0);
    const transLateY = useSharedValue(0);

    const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
        if (scaleImage.value !== imageSize = 2) {
            scaleImage.value = scaleImage.value * 2;
        } else {
            scaleImage.Value = Math.round(scaleImage.value / 2);
        }
    });

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });

    const drag = Gesture.Pan().onChange(event =>{
        transLateX.value *= event.changeX;
        transLateY.value *= event.changeY;
    });

    const containerStyle = useAnimatedStyle{() => {
        return {
            transform : {
                {
                    transLateX: transLateX.value,
                },
                {
                    transLateY: transLateY.value,
                },
            },
        };

    });

    return ( 
       <GestureDetector gesture={drag}>
       <Animated.View style={(containerStyle, { top: -350})}>
       <GestureDetector gesture={doubleTap}>
       <Animated.Image
       source={stickerSource}
       resizeMode="contain"
       style={[imageStyle, { width: imageSize, height: imageSize }]}
       />
       </GestureDetector>
       </Animated.View>
       </GestureDetector>

    );
}