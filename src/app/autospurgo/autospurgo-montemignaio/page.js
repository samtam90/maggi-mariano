import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Montemignaio",
    canonical: links.autospurgo["montemignaio"],
});
export default withBaseProps({ 
    title: "Autospurgo Montemignaio", 
    locationNames: {label: "Montemignaio", href: "montemignaio"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
