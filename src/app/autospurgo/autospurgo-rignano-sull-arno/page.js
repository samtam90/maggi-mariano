import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Rignano sull'Arno",
    canonical: links.autospurgo["rignano-sull-arno"],
});
export default withBaseProps({ 
    title: "Autospurgo Rignano sull'Arno", 
    locationNames: {label: "Rignano sull'Arno", href: "rignano-sull-arno"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
