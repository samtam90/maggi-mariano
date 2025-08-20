import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Gemini",
    canonical: links.autospurgo["san-gemini"],
});
export default withBaseProps({ 
    title: "Autospurgo San Gemini", 
    locationNames: {label: "San Gemini", href: "san-gemini"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["terni"],
        name: "Terni",
    }),
});
