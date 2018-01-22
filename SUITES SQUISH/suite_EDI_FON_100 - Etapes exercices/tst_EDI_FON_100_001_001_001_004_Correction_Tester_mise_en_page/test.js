function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":titleLabel_QLabel"), 111, 13, 0, Qt.LeftButton);
    clickButton(waitForObject(":ContentTabView.createNewPagePushButton_QPushButton"));
    mouseClick(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 38, 34, 0, Qt.LeftButton);
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "Gras");
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "<Return>");
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "Italique");
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "<Return>");
    type(waitForObject(":contentGroupBox.textEdit_QTextEdit"), "Bullet");
    mouseDrag(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 80, 52, -141, 1, 1, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Bullet"));
    mouseDrag(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 64, 30, -115, -5, 1, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":MainWindow_QMenuBar"), QEvent.MouseButtonRelease, 42, 20, Qt.LeftButton, 0, 0);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Italic"));
    mouseDrag(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 43, 11, -178, -10, 1, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Bold"));
    mouseClick(waitForObject(":contentGroupBox.textEdit_QTextEdit"), 303, 167, 0, Qt.LeftButton);
    test.vp("VP1");
}
