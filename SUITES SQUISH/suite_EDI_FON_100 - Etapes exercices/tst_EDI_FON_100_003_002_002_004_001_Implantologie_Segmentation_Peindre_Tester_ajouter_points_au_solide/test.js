function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_2"), QEvent.MouseButtonPress, 56, 2, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_3"), QEvent.MouseButtonRelease, 56, 2, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 516, -12, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    clickButton(waitForObject(":2D TOOLS_QToolButton_3"));
    scrollTo(waitForObject(":2D TOOLS.1 _QSlider"), 8);
    mouseDrag(waitForObject(":_QmitkRenderWindow"), 111, 177, 77, -78, 1, Qt.LeftButton);
    mouseDrag(waitForObject(":_QmitkRenderWindow"), 239, 78, 64, 112, 1, Qt.LeftButton);
    mouseDrag(waitForObject(":_QmitkRenderWindow_2"), 56, 85, 49, 127, 1, Qt.LeftButton);
    mouseDrag(waitForObject(":_QmitkRenderWindow_3"), 87, 74, 76, 125, 1, Qt.LeftButton);
    clickButton(waitForObject(":OK_QPushButton"));
    clickButton(waitForObject(":OK_QPushButton_2"));
    snooze(4);
    test.vp("VP1");
}
