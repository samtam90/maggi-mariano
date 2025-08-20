import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Marciano della Chiana",
    canonical: links.autospurgo["marciano-della-chiana"],
});
export default withBaseProps({ 
    title: "Autospurgo Marciano della Chiana", 
    locationNames: {label: "Marciano della Chiana", href: "marciano-della-chiana"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
