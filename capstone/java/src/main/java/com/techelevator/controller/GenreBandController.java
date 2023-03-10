package com.techelevator.controller;

import java.util.List;

import com.techelevator.dao.JdbcGenreBandDao;
import com.techelevator.model.GenreBand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/genre-band")
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class GenreBandController {
    @Autowired
    private JdbcGenreBandDao genreBandDao;

    @RequestMapping( method = RequestMethod.POST)
    public void addGenreBand(@RequestBody GenreBand genreBand) {
        genreBandDao.addGenreBand(genreBand.getGenreId(), genreBand.getBandId());
    }

    @RequestMapping(value = "/{bandId}", method = RequestMethod.DELETE)
    public void removeGenreBand( @PathVariable int bandId) {
       genreBandDao.deleteGenreBandByBandId(bandId);
    }

    @RequestMapping(value = "/genre/{genreId}", method = RequestMethod.GET)
    public List<GenreBand> getGenreBandsByGenreId(@PathVariable int genreId) {
        return genreBandDao.getGenreBandsByGenreId(genreId);
    }

    @RequestMapping(value = "/band/{bandId}", method = RequestMethod.GET)
    public List<GenreBand> getGenreBandsByBandId(@PathVariable int bandId) {
        return genreBandDao.getGenreBandsByBandId(bandId);
    }
}
