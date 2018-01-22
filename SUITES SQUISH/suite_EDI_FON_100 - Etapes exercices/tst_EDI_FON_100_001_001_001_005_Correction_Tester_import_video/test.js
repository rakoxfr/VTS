function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 103, 2, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    clickButton(waitForObject(":contentGroupBox.insertImagePushButton_QPushButton"));
    mouseClick(waitForObject(":QFileDialog.fileTypeCombo_QComboBox"), 281, 14, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":QFileDialog.fileTypeCombo_QComboBox", "Video(*\\.avi *\\.mkv *\\.mov *\\.mp4 *\\.mpeg )"), 266, 1, 0, Qt.LeftButton);
    mouseClick(waitForObject(":fileNameEdit_QLineEdit"), 282, 16, 0, Qt.LeftButton);
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[5], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 520, -11, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    test.vp("VP1");
}
