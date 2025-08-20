import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Sinalunga",
    canonical: links.autospurgo["sinalunga"],
});
export default withBaseProps({ 
    title: "Autospurgo Sinalunga", 
    locationNames: {label: "Sinalunga", href: "sinalunga"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["siena"],
        name: "Siena",
    }),
});
