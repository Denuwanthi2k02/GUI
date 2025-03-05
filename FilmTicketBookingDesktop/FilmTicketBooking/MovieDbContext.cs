using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FilmTicketBooking
{
    public class MovieDbContext:DbContext
    {
        public DbSet<movie> movies { get; set; }
        public DbSet<upcomingMovies> upcoming_movies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\Dewmini\Documents\GitHub\GUI\backend\database\movie_tickets.db"); 

        }
    }
}
