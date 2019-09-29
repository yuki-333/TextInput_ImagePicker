

import ImagePicker from 'react-native-image-picker';




 const showPicker = () => {
    let options = {
      title: '画像を選択',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    ImagePicker.showImagePicker(options, (response)  => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response.uri)
        this.setState({image: response.uri})
      }
    });
  }


export default showPicker;