import { getMetadata, withBaseProps } from "../page";
import { links } from "../../../../../app.config";
import comuni from "../../../../../.data/comuni.json";
import { getProvinceLocationsData } from "@/misc/pages";

export const metadata = getMetadata({
  title: "Disidratazione fanghi Castel Focognano",
  canonical: links.servizi["disidratazione-fanghi"]["castel-focognano"],
});
export default withBaseProps({
  title: "Disidratazione fanghi Castel Focognano",
  locationNames: { label: "Castel Focognano", href: "castel-focognano" },
  locationsData: getProvinceLocationsData({
      links: links.servizi["disidratazione-fanghi"],
      comuni: comuni["arezzo"],
      name: "Arezzo",
  }),
});
