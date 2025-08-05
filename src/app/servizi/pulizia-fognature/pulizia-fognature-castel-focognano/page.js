import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Pulizia fognature Castel Focognano",
  canonical: links.servizi["pulizia-fognature"]["castel-focognano"],
});
export default withBaseProps({
  title: "Pulizia fognature Castel Focognano",
  locationNames: { label: "Castel Focognano", href: "castel-focognano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["pulizia-fognature"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
