using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace FilmTicketBooking
{
    /// <summary>
    /// Interaction logic for Add_Upcome_Movie.xaml
    /// </summary>
    public partial class Add_Upcome_Movie : Window
    {
        public upcomingMovies UMovie { get; private set; }
        public Add_Upcome_Movie(upcomingMovies movieU)
        {
            InitializeComponent();
            UMovie = movieU;

            UFilm_name.Text = movieU.Title;
            UDate_Film.Text = movieU.Release_Date;
            UImage_url.Text = movieU.Img_Url;
        }

        private void Save_Product_U(object sender, RoutedEventArgs e)
        {

            try
            {

                UMovie.Title = UFilm_name.Text;
                UMovie.Release_Date = UDate_Film.Text;
                UMovie.Img_Url = UImage_url.Text;

                DialogResult = true;
                Close();

            }
            catch
            {
                MessageBox.Show("Error in input");
                DialogResult = false;
                Close();
            }

        }

        

        private void Cancel(object sender, RoutedEventArgs e)
        
        {
            Upcome_Movie_Management p = new Upcome_Movie_Management();
            p.Show();
            this.Close();

        }

    
    }
}
