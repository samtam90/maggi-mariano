import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Frantoio mobile inerti Dicomano",
  canonical: links.servizi["frantoio-mobile-inerti"]["dicomano"],
});
export default withBaseProps({
  title: "Frantoio mobile inerti Dicomano",
  locationNames: { label: "Dicomano", href: "dicomano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["frantoio-mobile-inerti"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
