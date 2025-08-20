import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Godenzo",
    canonical: links.autospurgo["san-godenzo"],
});
export default withBaseProps({ 
    title: "Autospurgo San Godenzo", 
    locationNames: {label: "San Godenzo", href: "san-godenzo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
