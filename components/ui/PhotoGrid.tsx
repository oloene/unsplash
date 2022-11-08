import Image from "next/image";
import type { Photo } from "../../utils/types";

type PropTypes = {
    photos: Photo[];
};

const PhotoGrid = ({ photos }: PropTypes): JSX.Element => {
    if (photos.length === 0) {
        return (
            <div className="my-10 text-center text-xl font-bold">
                No photos found
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-[1920px] mx-auto">
            {photos.map((photo) => (
                <div
                    className="relative min-h-[400px] overflow-hidden"
                    key={photo.id}
                >
                    <Image
                        fill
                        blurDataURL="data:image/webp;base64,UklGRqYCAABXRUJQVlA4WAoAAAAgAAAAaAAAYQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBoAAAA0AUAnQEqaQBiAD7tdrdWKaclI6CoATAdiWlu3V69gMbXU3uJIgI2mtbqb3FKEOLC8L5GBpxtcAD+8BxPlXq8DXEYaH1LdKhyuQ8j0S1Bkff58IxfX96eTYQHSF7PeTI8I56xzG/AAAA="
                        placeholder="blur"
                        className="hover:scale-105 hover:rotate-1 transition-transform duration-300 object-cover object-center"
                        src={photo.urls.small}
                        sizes="(min-width: 1536px) 16vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        alt={
                            photo.alt_description ||
                            "No photo description available"
                        }
                    />
                </div>
            ))}
        </div>
    );
};

export default PhotoGrid;
