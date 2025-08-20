import { getMetadata } from "../../servizi/frantoio-mobile-inerti/page";
import { withBaseProps } from "../page";
import { links } from "../../../../app.config";
import comuni from "../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({ 
    title: "Autospurgo Chiusi della Verna",
    canonical: links.autospurgo["chiusi-della-verna"],
});
export default withBaseProps({ 
    title: "Autospurgo Chiusi della Verna", 
    locationNames: {label: "Chiusi della Verna", href: "chiusi-della-verna"},
    locationsData: getProvinceLocationsData({
        links: links.autospurgo,
        comuni: comuni["arezzo"],
        name: "Arezzo",
    }),
});
