   M S B A M L   `   `   `  ����L  HFilmTicketBooking, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:FilmTicketBookingFilmTicketBooking  5   	   /    )FilmTicketBooking.Upcome_Movie_Management   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:FilmTicketBooking     5   	     � Title$  Upcome_Movie_Management��5   	   $	��450��6)   $	��800��66   $	��800��5	   	   $	��450��6    � 
ResizeMode$ NoResize=�5
   	    � WindowStartupLocation$ Manual=�5   	    � Left$	 200��5   	   
 � Top$	 100��6   .��5      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��5* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��Stretch=�6   $��Stretch=�5      $��4��5      $��3��5      ��5!      �� 5"       �� 
StartPoint$	 0,0&�6&    �� EndPoint$	 1,1&�67   .��5#      � 	 � Color$	 #CC5500��6#   
 � Offset$
 0Q�63   � 5$      $	 	#88353535��6#   $
 1Q�65   � 5%      $	 #00008B��6#   $
 1Q�63   5&      5)      �� 5,   
   $��0��6   $��4��5-      $
��Wrap=�5.      $%��Upcoming Movie Management Panel��5/      $��25(�50      $
��Bold"�51      
���   � �� TextAlignment$ Center=�53      $
��Left=�54      $��Center=�55      $��	133,0,0,0q�56      $	��497��6(   �� 5:   
   -   5        $��3��5:      $��0��5;      $��	Add Movie��5<      $��Center=�5=      $��center=�5>      $	��120��5?      $��38��5@      
��� ���$
��Bold"�5B       � Cursor$
 Hand��5C   $   ��5E      �� 5F       �� 
TargetType" ��6"   .R�5G      �� 
��� ��� �� CornerRadius$ 15��61    �� Padding$ 10q�6C   ._�5H      �� $��Center=�6+   $��Center=�6H   5I      5J      5M      �� 5P   
   -   5        $��3��5P      $��1��5Q      $��Edit Movie ��5R      $��Center=�5S      $��center=�5T      $	��120��5U      $��38��5V      
��� ���$
��Bold"�5X      $
 Hand��6#   ��5[      �� 5\      " ��6"   .R�5]      �� 
��� ���$ 15��61   $ 10q�6C   ._�5^      �� $��Center=�6+   $��Center=�6H   5_      5`      5c      �� 5f   
   -   5        $��2��5f      $��3��5g      $
��Back��5h      $��Center=�5i      $��Center=�5j      $	��120��5k      $��38��5l      
��� ���$
��Bold"�5n      $
 Hand��6#   ��5q      �� 5r      " ��6"   .R�5s      �� 
��� ���$ 15��61   $ 10q�6C   ._�5t      �� $��Center=�6+   $��Center=�6H   5u      5v      5y      &   System.Windows.Controls.DataGrid  5{   
   -   5          Name$ 
MovieGridU��5~      $��1��5{      $��0��5|      $��4��5}         AutoGenerateColumns$ False��5         CanUserAddRows$ False��5�         HeadersVisibility$ Column=�5�         ColumnWidth5  /System.Windows.Controls.DataGridLengthConverter$ * 5�      $
��Auto=�5�      $
��Auto=�5�         Columns 5�      0  *System.Windows.Controls.DataGridTextColumn  5�      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6%      Width$	 100 6H   1  +System.Windows.Controls.DataGridBoundColumn   Binding 61   �� *Id+6H     5�      $ Title��6%   $	 250 6N    64   �� *Title+6N     5�      $ Release_Date��6%   $	 200 6\    6;   �� *Release_Date+6\     5�      $ Img_Url��6%   $	 250 6R    66   �� *	Img_Url+6R   5�      �� 5�   
   -   5        $��2��5�      $��2��5�      $��Delete Movie��5�      $��Center=�5�      $��Center=�5�      $	��120��5�      $��38��5�      
��� ���$
��Bold"�5�      $
 Hand��6   ��5�      �� 5�      " ��6"   .R�5�      �� 
��� ���$ 15��61   $ 10q�6C   ._�5�      �� $��Center=�6+   $��Center=�6H   5�      5�      5�      5�      5�      