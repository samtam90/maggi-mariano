import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Dicomano",
  canonical: links.servizi["pulizia-fognature"]["dicomano"],
});
export default withBaseProps({
  title: "Pulizia fognature Dicomano",
  locationNames: { label: "Dicomano", href: "dicomano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["firenze"],
      name: "Firenze",
  }),
});
