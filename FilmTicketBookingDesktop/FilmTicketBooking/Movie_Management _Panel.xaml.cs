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
    /// Interaction logic for Movie_Management__Panel.xaml
    /// </summary>
    public partial class Movie_Management__Panel : Window
    {
        private MovieDbContext _db = new MovieDbContext();
        public Movie_Management__Panel()
        {
            InitializeComponent();
            LoadData();

        }
        private void LoadData()
        {
            MovieGrid.ItemsSource = _db.movies.ToList();
        }


        private void DataGrid_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {

        }

        private void Add_Button(object sender, RoutedEventArgs e)
        {
            movie movie_1 = new movie();
            Add_Movies mWindow = new Add_Movies(movie_1);
            if (mWindow.ShowDialog() == true)
            {
                _db.movies.Add(movie_1);
                _db.SaveChanges();
                LoadData();
            }

        }

        private void Edit_Button(object sender, RoutedEventArgs e)
        {
            
            {
                if (MovieGrid.SelectedItem is movie p)
                {
                    movie m = new movie();
                    m.Id = p.Id;
                    m.Title = p.Title;
                    m.Language = p.Language;
                    m.About = p.About;
                    m.Img_Url = p.Img_Url;


                    Add_Movies pWindow = new Add_Movies(m);
                    if (pWindow.ShowDialog() == true)
                    {

                        p.Title = m.Title;
                        p.Language = m.Language;
                        p.About = m.About;
                        p.Img_Url = m.Img_Url;

                        _db.movies.Update(p);
                        _db.SaveChanges();
                        LoadData();
                    }


                }
            }
        }

        private void Delete_Button(object sender, RoutedEventArgs e)
        {
            if (MovieGrid.SelectedItem is movie p)
            {
                _db.movies.Remove(p);
                _db.SaveChanges();
                LoadData();

            }

        }

        private void Back_Button(object sender, RoutedEventArgs e)
        {
            Selection p =new Selection();
            p.Show();
            this.Close();
        }
    }
}
