import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Greve in Chianti",
    canonical: links.autospurgo["greve-in-chianti"],
});
export default withBaseProps({ 
    title: "Autospurgo Greve in Chianti", 
    locationNames: {label: "Greve in Chianti", href: "greve-in-chianti"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
