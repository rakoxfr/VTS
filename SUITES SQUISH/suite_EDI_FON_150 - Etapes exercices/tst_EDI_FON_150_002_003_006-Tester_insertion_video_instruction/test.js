function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_5"), QEvent.MouseButtonPress, 96, 20, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_6"), QEvent.MouseButtonRelease, 96, 20, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":contentGroupBox.insertImagePushButton_QPushButton"));
    mouseClick(waitForObject(":QFileDialog.fileTypeCombo_QComboBox"), 255, 6, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":QFileDialog.fileTypeCombo_QComboBox", "Video(*\\.avi *\\.mkv *\\.mov *\\.mp4 *\\.mpeg )"), 225, 7, 0, Qt.LeftButton);
    mouseClick(waitForObject(":fileNameEdit_QLineEdit"), 190, 9, 0, Qt.LeftButton);
    
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[5], "Fichiers"));
    
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 518, -5, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    test.vp("VP1");
    // La vidéo ne s'affiche pas
}
