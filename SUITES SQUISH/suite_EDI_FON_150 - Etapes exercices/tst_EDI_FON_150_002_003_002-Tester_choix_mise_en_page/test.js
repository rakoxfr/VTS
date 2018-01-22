function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    mouseClick(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 77, 31, 0, Qt.LeftButton);
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "Ceci est une phrase en gra ");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "<Backspace>");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "s");
    mouseDrag(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 200, 20, -274, -27, 1, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Bold"));
    mouseClick(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 241, 124, 0, Qt.LeftButton);
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "<Return>");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "Ceci est une phrase en italique");
    mouseDrag(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 227, 28, -221, -2, 1, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Italic"));
    mouseClick(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 259, 43, 0, Qt.LeftButton);
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "<Return>");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "Bullte");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "<Backspace>");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "<Backspace>");
    type(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), "et");
    mouseDrag(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 66, 50, -80, -1, 1, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "Edit"));
    activateItem(waitForObjectItem(":MainWindow.Edit_QMenu", "Bullet"));
    mouseClick(waitForObject(":projectSelectionGroupBox.textEdit_QTextEdit"), 50, 85, 0, Qt.LeftButton);
    test.vp("VP1");
}
