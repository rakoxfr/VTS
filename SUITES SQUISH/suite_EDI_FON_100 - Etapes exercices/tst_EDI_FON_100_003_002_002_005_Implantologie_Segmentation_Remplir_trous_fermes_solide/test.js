function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_2"), QEvent.MouseButtonPress, 77, 4, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_3"), QEvent.MouseButtonRelease, 77, 4, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 511, -6, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":QFileDialog.Open_QPushButton"), QEvent.MouseButtonPress, 17, 18, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":QFileDialog.Open_QPushButton"), QEvent.MouseButtonRelease, 17, 18, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":2D TOOLS_QToolButton_5"));
    mouseClick(waitForObject(":_QmitkRenderWindow"), 148, 114, 0, Qt.LeftButton);
    test.vp("VP1");
}
