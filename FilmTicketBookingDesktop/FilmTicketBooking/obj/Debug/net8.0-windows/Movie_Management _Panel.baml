   M S B A M L   `   `   `  ����L  HFilmTicketBooking, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:FilmTicketBookingFilmTicketBooking  5   	   /    )FilmTicketBooking.Movie_Management__Panel   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:FilmTicketBooking     5   	     � Title$  Movie_Management__Panel��5   	   $	��450��6)   $	��800��66   $
��1000��5	   	   $	��650��6    � 
ResizeMode$ NoResize=�5
   	    � WindowStartupLocation$ Manual=�5   	    � Left$	 200��5   	   
 � Top$	 100��6   .��5      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��5* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��Stretch=�6   $��Stretch=�5      $��4��5      $��3��5      ��5       �� 5!       �� 
StartPoint$	 0,0&�6&    �� EndPoint$	 1,1&�67   .��5"      � 	 � Color$	 #CC5500��6#   
 � Offset$
 0Q�63   � 5#      $	 	#88353535��6#   $
 1Q�65   � 5$      $	 #00008B��6#   $
 1Q�63   5%      5(      �� 5+   
   $��0��6   $��4��5,      $
��Wrap=�5-      $��Movie Management Panel��5.      $��40(�5/      $
��Bold"�50      
���   � �� TextAlignment$ Center=�52      $
��Left=�53      $��Center=�54      $��	133,0,0,0q�55      $	��497��6(   �� 5:   
   -   5        $��3��5:      $��0��5;      $��	Add Movie��5<      $��Center=�5=      $��center=�5>      $	��120��5?      $��38��5@      
��� ���$
��Bold"�5B       � Cursor$
 Hand��5D      ��5F      �� 5G       �� 
TargetType" ��6"   .R�5H      �� 
��� ��� �� CornerRadius$ 15��61    �� Padding$ 10q�6C   ._�5I      �� $��Center=�6+   $��Center=�6H   5J      5K      5N      �� 5Q   
   -   5        $��3��5Q      $��1��5R      $��Edit Movie ��5S      $��Center=�5T      $��center=�5U      $	��120��5V      $��38��5W      
��� ���$
��Bold"�5Y      $
 Hand��5Z      ��5^      �� 5_      " ��6"   .R�5`      �� 
��� ���$ 15��61   $ 10q�6C   ._�5a      �� $��Center=�6+   $��Center=�6H   5b      5c      5f      �� 5i   
   -   5        $��3��5i      $��2��5j      $��Delete Movie��5k      $��Center=�5l      $��center=�5m      $	��120��5n      $��38��5o      
��� ���$
��Bold"�5q      $
 Hand��5r      ��5v      �� 5w      " ��6"   .R�5x      �� 
��� ���$ 15��61   $ 10q�6C   ._�5y      �� $��Center=�6+   $��Center=�6H   5z      5{      5~      �� 5�   
   -   5        $��2��5�      $��3��5�      $
��Back��5�      $��Center=�5�      $��Center=�5�      $	��120��5�      $��38��5�      
��� ���$
��Bold"�5�      $
 Hand��5�      ��5�      �� 5�      " ��6"   .R�5�      �� 
��� ���$ 15��61   $ 10q�6C   ._�5�      �� $��Center=�6+   $��Center=�6H   5�      5�      5�      &   System.Windows.Controls.DataGrid  5�   
   -   5          Name$ 	MovieGrid��5�      $��1��5�      $��0��5�      $��4��5�         AutoGenerateColumns$ False��5�         CanUserAddRows$ False��5�         HeadersVisibility$ Column=�5�      $��Stretch=�5�      $��Stretch=�5�      $
��Auto=�5�      $
��Auto=�5�         Columns 5�      0  *System.Windows.Controls.DataGridTextColumn  5�      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6%      Width5  /System.Windows.Controls.DataGridLengthConverter$
 auto 6H   1  +System.Windows.Controls.DataGridBoundColumn   Binding 61   �� *Id+6H     5�      $ Title��6%   $
 auto 6N    64   �� *Title+6N     5�      $ Language��6%   $
 auto 6T    67   �� *
Language+6T     5�      $ Img_Url��6%   $
 auto 6R    66   �� *	Img_Url+6R     5�      $ About��6%   $
 auto 6N    64   �� *About+6N   5�      5�      5�      