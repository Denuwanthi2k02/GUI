   M S B A M L   `   `   `  ����L  HFilmTicketBooking, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:FilmTicketBookingFilmTicketBooking  5   	   !    FilmTicketBooking.Selection   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:FilmTicketBooking     5   	     � Title$  	Selection��5   	   $	��450��6   $	��800��6(   $	��800��5	   	   $	��450��6    � 
ResizeMode$ NoResize=�5
   	    � WindowStartupLocation$ Manual=�5   	    � Left$	 200��5   	   
 � Top$	 100��6   .��5      �  � RowDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6    � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $��* �6   �� 5      $��* �6   .+�5   
   �� $��Stretch=�6   $��Stretch=�5      $��2��5      $��3��5      ��5      �� 5        �� 
StartPoint$	 0,0&�6&    �� EndPoint$	 1,1&�67   .��5!      � 	 � Color$	 #CC5500��6#   
 � Offset$
 0Q�63   � 5"      $	 	#88353535��6#   $
 1Q�65   � 5#      $	 #00008B��6#   $
 1Q�63   5$      5'      �� 5)   
   $��0��6   $��0��5*      $��3��5+      $��Center=�5,      $��	0,91,0,68q�5-      $
��Wrap=�5.      $��Type of Movie Selection��5/      $��30(�50      $
��Bold"�51      
���   �$	��358��53       �� TextAlignment$ Center=�54      �� 57   
   -   5        $��1��57      $��1��58      $��Upcomming Movies��59      $	��Top=�5;      $��38��5<      
��� ���$
��Bold"�5>      $��
63,24,63,0q�5?       � Cursor$
 Hand��5@      ��5C      �� 5D       �� 
TargetType" ��6"   .R�5E      �� 
��� ��� �� CornerRadius$ 15��61    �� Padding$ 10q�6C   ._�5F      �� $��Center=�6+   $��Center=�6H   5G      5H      5K      �� 5R   
   -   5        $��1��5R      $��Released Movie��5S      $��Center=�5T      $	��Top=�5V      $	��140��5W      $��38��5X      
��� ���$
��Bold"�5Z      $��0,24,0,0q�5[      $
 Hand��5\      ��5_      �� 5`      " ��6"   .R�5a      �� 
��� ���$ 15��61   $ 10q�6C   ._�5b      �� $��Center=�6+   $��Center=�6H   5c      5d      5g      �� 5j   
   -   5        $��1��5j      $��2��5k      $
��Back��5l      $	��Top=�5n      $��38��5o      
��� ���$
��Bold"�5q      $��
63,24,63,0q�5r      $
 Hand��5s      ��5v      �� 5w      " ��6"   .R�5x      �� 
��� ���$ 15��61   $ 10q�6C   ._�5y      �� $��Center=�6+   $��Center=�6H   5z      5{      5~      5�      5�      