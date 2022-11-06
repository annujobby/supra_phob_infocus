import React, { forwardRef } from "react";
import { Skeleton } from "../Skeleton";
import ImageArray from "./ImageArray";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();

  const data =[
    [{tag : "h1", text : "Legend" ,class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Legend",class : "b1"},{tag : "h1", text : "TRUGLOW",class : "b2"},{tag : "h1", text : "FS-1",class : "b3"}],
    [{tag : "h1", text : "Precise Optics"}],
    [{tag : "h1", text : "Precise Optics"}],
    [{tag : "h1", text : "Precise Optics"}],
    [{tag : "h1", text : "Precise Optics"}],
    [{tag : "h1", text : "Precise Optics"}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Precise Optics"},{tag : "p", text : "The AAMO Legend Truglow FS-1 has a converging binocular optical head with precise optics. The major advantage of this microscope is that it allows deep light penetration, provides greater visibility and better diagnostic perception. Its optics offers a higher quality view with improved efficiency to doctor's working conditions."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Ideal Light Source"},{tag : "p", text : "The integrated led illumination emits a light beam that penetrates even in the most unapproachable areas during the surgical procedures, thus illuminating your field of view with uniformity."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "Tiltable Eye Piece"},{tag : "p", text : "When work surfaces are set at elbow height to facilitate hand operations, the tiltable eyepiece allows the doctor to set the microscope's eyepiece height to achieve a good ergonomic neutral posture. Adjustability eliminates raised shoulders and bent necks, which can cause discomfort."}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "C-Mount With Hd Camera"},{tag : "p", text : "It has an uhd digital camera integrated with seamless designed microscope capable of streaming high resolution video"}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "X-Y Coupling Unit"},{tag : "p", text : "The ±60mm stroke both in x and y directions allow the surgeon to cover an extensive area during the cataract surgery. With the introduction of an upgraded x-y coupling, reliability in positioning has been improved."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],
    [{tag : "h1", text : "Robust Base Assembly"},{tag : "p", text : "The aamo legend truglow fs-1 has a solid state mobile floor stand with castor locks that arrest the axial and rotary movement. It also has a stand with counter balanced weight that can withstand the weight of suspension arms."}],



  
   
  ]

  function createData(data){
    return(
      <>
        {data.map(elem => {
          if(elem.tag === "h1") return <h1 className={`heading ${elem.class?elem.class : ""}`}>{elem.text} <br/> </h1>
          if(elem.tag === "p") return <p className="content"><div>{elem.text}</div> <br/></p>
        })}
      </>
    )
    
  }

  let index = Math.round(progress * 1* (newImages.length - 1));
  console.log(index);
  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return newImages.map((item, i) => (
        <div className="container1" >
        <div className="item" style={{
              display: i !== index ? "none" : "block",
            }}> {data[index]?createData(data[index]):""}</div>
          <div className="item" >
          <img
            ref={ref}
            key={i}
            src = {`${item[0] ? item[0].src : null}`}
            style={{
              display: i !== index ? "none" : "block",
            }}
            className ="content-image"

          />
          </div>
        </div>
      ));
    }
  }
});

export default ImageSequence;
