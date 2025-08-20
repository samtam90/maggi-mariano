import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Borgo San Lorenzo",
    canonical: links.autospurgo["borgo-san-lorenzo"],
});
export default withBaseProps({ 
    title: "Autospurgo Borgo San Lorenzo", 
    locationNames: {label: "Borgo San Lorenzo", href: "borgo-san-lorenzo"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["firenze"],
        name: "Firenze",
    }),
});
