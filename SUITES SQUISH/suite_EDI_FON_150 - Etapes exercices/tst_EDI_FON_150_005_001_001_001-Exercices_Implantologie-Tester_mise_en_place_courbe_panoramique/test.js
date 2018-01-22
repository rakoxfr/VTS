function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_13"), QEvent.MouseButtonPress, 116, 3, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_14"), QEvent.MouseButtonRelease, 116, 3, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 520, -8, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_8"), QEvent.MouseButtonPress, 60, 15, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_18"), QEvent.MouseButtonRelease, 60, 15, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":panoramicCurvesButton_QPushButton"));
    clickButton(waitForObject(":New panoramic curve_QPushButton"));
    mouseClick(waitForObject(":_vts::planning::SinglePlaneRenderWindow"), 37, 195, 0, Qt.LeftButton);
    mouseClick(waitForObject(":_vts::planning::SinglePlaneRenderWindow"), 65, 104, 0, Qt.LeftButton);
    mouseClick(waitForObject(":_vts::planning::SinglePlaneRenderWindow"), 161, 72, 0, Qt.LeftButton);
    doubleClick(waitForObject(":_vts::planning::SinglePlaneRenderWindow"), 230, 181, 0, Qt.LeftButton);
    test.vp("VP1");
}
