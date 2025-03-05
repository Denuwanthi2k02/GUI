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
    /// Interaction logic for Upcome_Movie_Management.xaml
    /// </summary>
    public partial class Upcome_Movie_Management : Window
    {
        private MovieDbContext _db = new MovieDbContext();
        public Upcome_Movie_Management()
        {
            InitializeComponent();
            LoadData();
        }

        private void LoadData()
        {
            MovieGridU.ItemsSource = _db.upcoming_movies.ToList();
        }
       

        private void AddUpMovie(object sender, RoutedEventArgs e)
        {
            upcomingMovies movie_U = new upcomingMovies();
            Add_Upcome_Movie mWindow = new Add_Upcome_Movie(movie_U);
            if (mWindow.ShowDialog() == true)
            {
                _db.upcoming_movies.Add(movie_U);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void EditUpMovie(object sender, RoutedEventArgs e)
        {
            {
                if (MovieGridU.SelectedItem is upcomingMovies p)
                {
                    upcomingMovies u = new upcomingMovies();
                    u.Id = p.Id;
                    u .Title = p.Title;
                    u.Release_Date = p.Release_Date;
                    u.Img_Url = p.Img_Url;
                    


                    Add_Upcome_Movie pWindow = new Add_Upcome_Movie(u);
                    if (pWindow.ShowDialog() == true)
                    {

                        p.Title = u.Title;
                        p.Release_Date = u.Release_Date;
                        
                        p.Img_Url = u.Img_Url;

                        _db.upcoming_movies.Update(p);
                        _db.SaveChanges();
                        LoadData();
                    }


                }
            }

        }

        private void DeleteUpMovie(object sender, RoutedEventArgs e)
        {
            if (MovieGridU.SelectedItem is upcomingMovies p)
            {
                _db.upcoming_movies.Remove(p);
                _db.SaveChanges();
                LoadData();
            }

        }

        private void Back_Button(object sender, RoutedEventArgs e)
        {
            Selection p = new Selection();
            p.Show();
            this.Close();

        }
    }
}
