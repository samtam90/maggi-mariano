import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Bolzano",
  canonical: links.servizi["pulizia-fognature"]["bolzano"],
});
export default withBaseProps({
  title: "Pulizia fognature Bolzano",
  locationNames: { label: "Bolzano", href: "bolzano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["bolzano"],
      name: "Bolzano",
  }),
});
