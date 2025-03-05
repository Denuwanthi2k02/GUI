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
    /// Interaction logic for Add_Movies.xaml
    /// </summary>
    public partial class Add_Movies : Window
    {
        public movie Movie { get; private set; }
        public Add_Movies(movie movie_1)
        {
            InitializeComponent();
            Movie = movie_1;

            Film_name.Text = movie_1.Title;
            Language_Film.Text = movie_1.Language;
            About_film.Text=movie_1.About;
            Image_url.Text = movie_1.Img_Url;

        }

        private void Save_Product(object sender, RoutedEventArgs e)
        {

            try
            {
                
                Movie.Title = Film_name.Text;
                Movie.Language = Language_Film.Text;
                Movie.Img_Url = Image_url.Text;
                Movie.About = About_film.Text;
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
            Movie_Management__Panel p= new Movie_Management__Panel();
            p.Show();   
            this.Close();

        }

       
    }
}
