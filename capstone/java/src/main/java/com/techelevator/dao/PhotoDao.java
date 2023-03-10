package com.techelevator.dao;

import com.techelevator.model.Photo;

import java.util.List;

public interface PhotoDao {

    List<Photo> findPhotoByBandId(int bandId);


    void deletePhoto(Photo photo);

    // photo_id could be changed if it's messing things up

    void addPhoto(Photo photo);

    void updatePhotos(List<Photo> photos);
}
