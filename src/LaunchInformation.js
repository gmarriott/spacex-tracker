import React from 'react';
import fallbackImg from './assets/spaceship.png';

const imageSrc = function(imageReference){
    let imageSrc;

    if (imageReference.flickr.original[0]) {
        imageSrc = imageReference.flickr.original[0];
    } else {
        imageSrc = imageReference.patch.small;
    }

    if(!imageReference.flickr.original[0] && !imageReference.patch.small) {
        imageSrc = fallbackImg;
    }

    return imageSrc;
}

const launchSuccess = function(launchSuccess){
    return launchSuccess ? "This launch was a success!" : "This launch did not succeed.";
}

const launchDate = function(launchDate){
    return new Date(launchDate).toDateString();
}

const launchDescription = function(launchDetails){
    if(launchDetails === null) {
        return "This launch does not have any specific details associated with it but please visit the SpaceX website for more info on launches.";
    }
    return launchDetails;
}

const launchArticle = function(props){
    if(props.links.article === null) {
        return <p className="text-gray-900 text-lg">No articles yet published regarding this launch</p>
    }
    return <a className="text-lg underline text-blue-800 hover:text-blue-900" target='_blank' href={props.links.article}>Available article on launch {props.name}</a>;
}

const LaunchInformation = (props) => {
    return <div className="flex justify-center mb-4">
      <div className="flex flex-col md:flex-row md:w-11/12 rounded-lg overflow-hidden bg-stone-100 shadow-lg">
        <img className="h-48 w-full md:max-w-[300px] p-6 pt-8" src={imageSrc(props.launch.links)} alt="launchimg" />
        <div className="p-6 flex-row w-full">
          <h1 className="text-gray-900 text-xl font-bold mb-3 underline">Launch Name: {props.launch.name}</h1>
          <p className="text-gray-900 text-lg font-bold">Launch Date:</p> <p className="text-gray-900 text-lg">{launchDate(props.launch.date_utc)}</p>
          <p className="text-gray-900 text-lg font-bold">Launch Successful:</p> <p className="text-gray-900 text-lg mb-3">{launchSuccess(props.launch.success)}</p>
          <p className="text-gray-900 text-lg font-bold">Launch Details:</p> <p className="text-gray-900 text-lg mb-3">{launchDescription(props.launch.details)}</p>
          <p className="text-gray-900 text-lg font-bold">Launch Article:</p> {launchArticle(props.launch)}
        </div>
      </div>
    </div>
}

export default LaunchInformation;
