import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Massa-Carrara",
    canonical: links.autospurgo["massa-carrara"],
});
export default withBaseProps({ 
    title: "Autospurgo Massa-Carrara", 
    locationNames: {label: "Massa-Carrara", href: "massa-carrara"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["massa-carrara"],
        name: "Massa-Carrara",
    }),
});
