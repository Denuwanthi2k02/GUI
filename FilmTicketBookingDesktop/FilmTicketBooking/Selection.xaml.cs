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
    /// Interaction logic for Selection.xaml
    /// </summary>
    public partial class Selection : Window
    {
        public Selection()
        {
            InitializeComponent();
        }

        private void AddMovieUp(object sender, RoutedEventArgs e)
        {
            Upcome_Movie_Management upcome = new Upcome_Movie_Management();
            upcome.Show();
            this.Close();

        }

        private void AddMovie(object sender, RoutedEventArgs e)
        {
            Movie_Management__Panel movies = new Movie_Management__Panel();
            movies.Show();
            this.Close();

        }

        private void Back_button(object sender, RoutedEventArgs e)
        {
            MainWindow p = new MainWindow();
            p.Show();
            this.Close();

        }
    }
}
