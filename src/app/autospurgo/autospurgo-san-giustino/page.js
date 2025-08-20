import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo San Giustino",
    canonical: links.autospurgo["san-giustino"],
});
export default withBaseProps({ 
    title: "Autospurgo San Giustino", 
    locationNames: {label: "San Giustino", href: "san-giustino"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["perugia"],
        name: "Perugia",
    }),
});
