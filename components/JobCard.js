import Link from 'next/link';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 p-6 flex flex-col h-full group">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
        <p className="text-blue-600 font-medium mb-4">{job.company}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-slate-500 text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            {job.location}
          </div>
          <div className="flex items-center text-slate-500 text-sm">
            <Clock className="h-4 w-4 mr-2" />
            {job.job_type}
          </div>
          <div className="flex items-center text-slate-500 text-sm">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="truncate">{job.skills}</span>
          </div>
        </div>
        <p className="text-slate-600 text-sm line-clamp-3 mb-6 text-justify">{job.description}</p>
      </div>
      {job.link ? (
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors py-2.5 rounded-lg font-medium"
        >
          Apply Now
        </a>
      ) : (
        <button className="mt-auto block w-full text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors py-2.5 rounded-lg font-medium">
          Apply Now
        </button>
      )
      }
    </div>
  );
}
