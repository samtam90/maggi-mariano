import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Gimignano",
    canonical: links.autospurgo["san-gimignano"],
});
export default withBaseProps({ 
    title: "Autospurgo San Gimignano", 
    locationNames: {label: "San Gimignano", href: "san-gimignano"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
